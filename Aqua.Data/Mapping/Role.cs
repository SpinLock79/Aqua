using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Aqua.Data.Mapping
{
    public static class Role
    {
        public static void Configure(EntityTypeBuilder<Entities.Role> builder)
        {
            if (builder == null) return;
            
            builder.ToTable($"{Constants.Prefix}.Role")
                .HasKey(x => x.Id.ToString());
            builder.Property(x => x.Id)
                .HasColumnName("Id");
            builder.Property(x => x.Name)
                .HasMaxLength(50)
                .HasColumnName("Name");
        }
    }
}