namespace IgiCore.InventoryUi.Shared.Models
{
	public class Item : IItem
	{
		public string Id { get; set; }
		public string ContainerId { get; set; }
		public string Name { get; set; }
		public string Image { get; set; }
		public float Weight { get; set; }
		public int X { get; set; }
		public int Y { get; set; }
		public int Width { get; set; }
		public int Height { get; set; }
	}
}
