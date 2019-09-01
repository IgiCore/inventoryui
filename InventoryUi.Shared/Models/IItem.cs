namespace IgiCore.InventoryUi.Shared.Models
{
	public interface IItem
	{
		string Id { get; set; }

		string ContainerId { get; set; }

		string Name { get; set; }

		string Image { get; set; }

		float Weight { get; set; }

		int X { get; set; }

		int Y { get; set; }

		int Width { get; set; }

		int Height { get; set; }
	}
}
