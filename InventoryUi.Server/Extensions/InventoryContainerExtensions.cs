using System.Collections.Generic;
using IgiCore.InventoryUi.Shared.Models;

namespace IgiCore.InventoryUi.Server.Extensions
{
	public static class InventoryContainerExtensions
	{
		public static Container ToUiContainer(this Inventory.Server.Models.Container inventoryContainer)
		{
			var container = new Container
			{
				Id = inventoryContainer.Id.ToString(),
				Height = inventoryContainer.Height,
				Width = inventoryContainer.Width,
				MaxWeight = inventoryContainer.MaxWeight,
				Name = inventoryContainer.Name,
				Items = new List<Item>(),
			};

			foreach (var inventoryContainerItem in inventoryContainer.Items)
			{
				container.Items.Add(new Item
				{
					Id = inventoryContainerItem.Id.ToString(),
					ContainerId = inventoryContainerItem.ContainerId?.ToString() ?? container.Id,
					Height = inventoryContainerItem.Height,
					Width = inventoryContainerItem.Width,
					Image = inventoryContainerItem.ItemDefinition.Image,
					Name = inventoryContainerItem.ItemDefinition.Name,
					Weight = inventoryContainerItem.Width,
					X = inventoryContainerItem.X ?? 0,
					Y = inventoryContainerItem.Y ?? 0
				});
			}

			return container;
		}
	}
}
