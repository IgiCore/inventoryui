using JetBrains.Annotations;
using NFive.SDK.Server.Migrations;
using IgiCore.InventoryUi.Server.Storage;

namespace IgiCore.InventoryUi.Server.Migrations
{
	[UsedImplicitly]
	public sealed class Configuration : MigrationConfiguration<StorageContext> { }
}
