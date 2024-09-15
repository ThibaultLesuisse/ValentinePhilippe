using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Wedding.Api.Migrations
{
    /// <inheritdoc />
    public partial class AddAddress : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "IsVegetarian",
                table: "Guests");

            migrationBuilder.AddColumn<string>(
                name: "Address_City",
                table: "Rsvps",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "Address_Country",
                table: "Rsvps",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "Address_HouseNumber",
                table: "Rsvps",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "Address_PostalCode",
                table: "Rsvps",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "Address_Street",
                table: "Rsvps",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Address_City",
                table: "Rsvps");

            migrationBuilder.DropColumn(
                name: "Address_Country",
                table: "Rsvps");

            migrationBuilder.DropColumn(
                name: "Address_HouseNumber",
                table: "Rsvps");

            migrationBuilder.DropColumn(
                name: "Address_PostalCode",
                table: "Rsvps");

            migrationBuilder.DropColumn(
                name: "Address_Street",
                table: "Rsvps");

            migrationBuilder.AddColumn<bool>(
                name: "IsVegetarian",
                table: "Guests",
                type: "bit",
                nullable: false,
                defaultValue: false);
        }
    }
}
