using System.Collections.Generic;

namespace IgiCore.InventoryUi.Shared.Models
{
	public interface IContainer
	{
		string Id { get; set; }

		string Name { get; set; }

		int Width { get; set; }

		int Height { get; set; }

		float MaxWeight { get; set; }

		List<Item> Items { get; set; }
	}
}
