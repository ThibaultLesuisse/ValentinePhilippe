using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Wedding.Api.Migrations
{
    /// <inheritdoc />
    public partial class FixAddress : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Address_HouseNumber",
                table: "Rsvps");

            migrationBuilder.RenameColumn(
                name: "Address_Street",
                table: "Rsvps",
                newName: "Address_StreetAndHouseNumber");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Address_StreetAndHouseNumber",
                table: "Rsvps",
                newName: "Address_Street");

            migrationBuilder.AddColumn<string>(
                name: "Address_HouseNumber",
                table: "Rsvps",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");
        }
    }
}
