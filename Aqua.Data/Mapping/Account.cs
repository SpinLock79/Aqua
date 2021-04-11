using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Aqua.Data.Mapping
{
    public static class Account
    {
        public static void Configure(EntityTypeBuilder<Entities.Account> builder)
        {
            if (builder == null) return;
            
            builder.ToTable($"{Constants.Prefix}.Account")
                .HasKey(x => x.Id.ToString());
            builder.Property(x => x.Id)
                .HasColumnName("Id");
            builder.Property(x => x.RoleId)
                .HasColumnName("RoleId");
            builder.Property(x => x.Name)
                .HasMaxLength(50)
                .HasColumnName("Name");
            builder.Property(x => x.Password)
                .HasMaxLength(50)
                .HasColumnName("Password");
            
            builder.HasOne(x => x.Role)
                .WithMany(x => x.Accounts)
                .HasForeignKey(x => x.RoleId.ToString())
                .IsRequired();
        }
    }
}