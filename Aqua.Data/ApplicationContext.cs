using Aqua.Data.Entities;
using Microsoft.EntityFrameworkCore;

namespace Aqua.Data
{
    public sealed class ApplicationContext: DbContext
    {
        public ApplicationContext()
        {
            Database.EnsureCreated();
        }
        public DbSet<Role> Roles { get; set; }
        public DbSet<Account> Accounts { get; set; }
    }
}