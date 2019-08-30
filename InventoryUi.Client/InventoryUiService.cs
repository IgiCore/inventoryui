using JetBrains.Annotations;
using NFive.SDK.Client.Commands;
using NFive.SDK.Client.Events;
using NFive.SDK.Client.Interface;
using NFive.SDK.Client.Rpc;
using NFive.SDK.Client.Services;
using NFive.SDK.Core.Diagnostics;
using NFive.SDK.Core.Models.Player;
using System;
using System.Threading.Tasks;
using CitizenFX.Core;
using CitizenFX.Core.Native;
using IgiCore.InventoryUi.Client.Models;
using IgiCore.InventoryUi.Client.Overlays;
using IgiCore.InventoryUi.Shared;
using NFive.SDK.Client.Input;
using NFive.SDK.Core.Helpers;

namespace IgiCore.InventoryUi.Client
{
	[PublicAPI]
	public class InventoryUiService : Service
	{
		private Configuration config;
		private InventoryUiOverlay overlay;

		public InventoryUiService(ILogger logger, ITickManager ticks, IEventManager events, IRpcHandler rpc, ICommandManager commands, OverlayManager overlay, User user) : base(logger, ticks, events, rpc, commands, overlay, user) { }

		public override async Task Started()
		{
			// Request server configuration
			this.config = await this.Rpc.Event(InventoryUiEvents.Configuration).Request<Configuration>();

			// Update local configuration on server configuration change
			this.Rpc.Event(InventoryUiEvents.Configuration).On<Configuration>((e, c) => this.config = c);

			// Create overlay
			this.overlay = new InventoryUiOverlay(this.OverlayManager);

			// Attach a tick handler
			this.Ticks.Attach(OnTick);
		}

		private void OnTick()
		{
			if (!Input.IsControlJustReleased(Control.Pickup)) return;

			API.SetNuiFocus(true, true);
			this.overlay.Show();
		}
	}
}
