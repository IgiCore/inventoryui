using System.Collections.Generic;
using System.Linq;
using IgiCore.Characters.Server;
using IgiCore.Characters.Server.Events;
using IgiCore.InventoryUi.Server.Extensions;
using JetBrains.Annotations;
using NFive.SDK.Core.Diagnostics;
using NFive.SDK.Server.Controllers;
using NFive.SDK.Server.Events;
using NFive.SDK.Server.Rcon;
using NFive.SDK.Server.Rpc;
using IgiCore.InventoryUi.Shared;
using IgiCore.InventoryUi.Shared.Models;
using Configuration = IgiCore.InventoryUi.Shared.Configuration;

namespace IgiCore.InventoryUi.Server
{
	[PublicAPI]
	public class InventoryUiController : ConfigurableController<Configuration>
	{
		public readonly CharacterManager CharacterManager;

		public InventoryUiController(ILogger logger, IEventManager events, IRpcHandler rpc, IRconManager rcon, Configuration configuration, CharacterManager characterManager) : base(logger, events, rpc, rcon, configuration)
		{
			this.CharacterManager = characterManager;

			// Send configuration when requested
			this.Rpc.Event(InventoryUiEvents.Configuration).On(e => e.Reply(this.Configuration));

			this.CharacterManager.Selected += OnCharacterSelect;
		}

		private void OnCharacterSelect(object sender, CharacterSessionEventArgs e)
		{
			var characterInventories = this.CharacterManager.GetCharacterInventories(e.CharacterSession.CharacterId);
			this.Logger.Warn("Character Inventory: " + characterInventories.First().Items.First().ItemDefinition.Name);

			var containers = new List<Container>();
			foreach (var characterInventory in characterInventories)
			{
				this.Logger.Warn($"container: {characterInventory.Id}");
				foreach (var characterInventoryItem in characterInventory.Items)
				{
					this.Logger.Warn($"Item: {characterInventoryItem.Id}");
					this.Logger.Warn($"Item Def: {characterInventoryItem.ItemDefinition.Id}");
				}

				containers.Add(characterInventory.ToUiContainer());
			}

			this.Rpc.Event(InventoryUiEvents.LoadCharacterInventories).Trigger(containers);
		}

		public override void Reload(Configuration configuration)
		{
			// Update local configuration
			base.Reload(configuration);

			// Send out new configuration
			this.Rpc.Event(InventoryUiEvents.Configuration).Trigger(this.Configuration);
		}
	}
}
