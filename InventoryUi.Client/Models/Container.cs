using System.Collections.Generic;

namespace IgiCore.InventoryUi.Client.Models
{
	public class Container
	{
		public string Id { get; set; }

		public string Name { get; set; }

		public int Width { get; set; }

		public int Height { get; set; }

		public float MaxWeight { get; set; }

		public List<Item> Items { get; set; }
	}
}
