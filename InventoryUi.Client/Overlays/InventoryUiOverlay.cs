using System.Collections.Generic;
using CitizenFX.Core.Native;
using IgiCore.InventoryUi.Shared.Models;
using NFive.SDK.Client.Interface;
using NFive.SDK.Core.Helpers;

namespace IgiCore.InventoryUi.Client.Overlays
{
	public class InventoryUiOverlay : Overlay
	{
		public InventoryUiOverlay(OverlayManager manager) : base("InventoryUiOverlay.html", manager)
		{
			Attach("close", (_, callback) => Close());
            Attach("ready", (_, callback) =>
            {
	            Send("hotkey", "e");
			});
		}

		protected void Close()
		{
            this.Hide();
            API.SetNuiFocus(false, false);
		}

		public void AddItem(Item item)
		{
			this.Send("add-item", item);
		}

		public void AddContainer(Container container)
		{
            this.Send("add-container", container);
		}
	}
}
