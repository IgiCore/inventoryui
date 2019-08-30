using System.Collections.Generic;
using CitizenFX.Core.Native;
using IgiCore.Inventory.Shared.Models;
using IgiCore.InventoryUi.Client.Models;
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
	            var containerId = GuidGenerator.GenerateTimeBasedGuid().ToString();

				this.AddContainer(new Container()
	            {
                    Id = containerId,
                    Width = 10,
                    Height = 20,
                    MaxWeight = 25,
                    Name = "Backpack",
                    Items = new List<Item>()
                    {
	                    new Item
	                    {
		                    Id = GuidGenerator.GenerateTimeBasedGuid().ToString(),
		                    ContainerId = containerId,
		                    Name = "",
		                    Image = "data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\"><path d=\"M55.505 435.172h91.88v-16.518h-91.88zm265.317-173.437v-49.326l16.518-.795v66.639H218.618c2.158-5.162 4.316-11.356 6.442-16.518zM466.385 76.828l14.949 9.405h-14.949zm-387.136.114h15.486v9.291H79.249zm179.982 138.45c.207 9.374 2.468 21.442 10.592 32.458-9.952-2.065-22.712-14.03-30.61-22.444 1.353-3.407 2.602-6.504 3.697-9.219zm-134.558-63.088v-49.553h16.518v49.553zm66.071 0v-49.553h16.518v49.553zm-120.786 0v-49.553h38.198v49.553zm87.75 0v-49.553h16.519v49.553zM96.49 217.488c.413-12.389-14.608-33.335-30.899-33.335-20.977 0-11.593-8.104-1.331-15.33H486V187.9l-254.312 12.285c-4.976 11.625-22.712 56.976-36.39 92.149l4.779 10.324-9.477 1.858c-3.49 9.033-11.5 29.69-14.856 38.414l3.645 9.797-8.26 2.953c-12.388 32.313-17.55 46.456-17.55 46.456H53.44S26 393.216 26 385.216c-.124-43.99 69.292-131.74 70.49-167.728zM223.78 102.75H486v49.553H223.78z\" fill=\"white\"/></svg>",
		                    Weight = 2.5f,
		                    X = 0,
		                    Y = 1,
		                    Width = 2,
		                    Height = 1,
	                    },
	                    new Item
	                    {
		                    Id = GuidGenerator.GenerateTimeBasedGuid().ToString(),
		                    ContainerId = containerId,
		                    Name = "",
		                    Image = "data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\"><path d=\"M50 96c-9.972 0-18 8.028-18 18v300c0 9.972 8.028 18 18 18h412c9.972 0 18-8.028 18-18V114c0-9.972-8.028-18-18-18H50zm5 23h402v18H55v-18zm0 32h210v258H55V151zm18 18v222h7.03c.47-24.342 18.315-74.172 47.093-97.889C136.331 300.56 147.615 305 160 305c12.385 0 23.669-4.44 32.877-11.889C221.655 316.828 239.5 366.658 239.97 391H247V169H73zm222 14h146v18H295v-18zm-135 10c20.835 0 39 20.241 39 47s-18.165 47-39 47-39-20.241-39-47 18.165-47 39-47zm135 22h114v18H295v-18zm0 32h50v18h-50v-18zm80 0h66v18h-66v-18zm-16 96h98v18h-98v-18zm-32 32h130v18H327v-18z\" fill=\"white\"></path></svg>",
		                    Weight = 5,
		                    X = 3,
		                    Y = 5,
		                    Width = 2,
		                    Height = 2,
	                    }
					}

	            });
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
