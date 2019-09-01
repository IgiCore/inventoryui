using System.Collections.Generic;

namespace IgiCore.InventoryUi.Shared.Models
{
	public class Container : IContainer
	{
		public string Id { get; set; }
		public string Name { get; set; }
		public int Width { get; set; }
		public int Height { get; set; }
		public float MaxWeight { get; set; }
		public List<Item> Items { get; set; }
	}
}
