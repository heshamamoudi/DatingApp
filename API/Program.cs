
using API.Data;

namespace API
{
    public class Program
    {
        public static async Task Main(string[] args)
        {
          var host =  CreateHostBuilder(args).Build();
          using var scope = host.Services.CreateScope();
          var services = scope.ServiceProvider;
          try{
                var context = services.GetRequiredService<AppDbContext>();
                await context.Database.MigrateAsync();
                await Seed.SeedUsers(context);
          }catch (Exception ex){
                var logger = services.GetRequiredService<ILogger<Program>>();
                logger.LogError(ex,"An Error occured during migration");

          }
            await host.RunAsync();
        }

        public static IHostBuilder CreateHostBuilder(string[] args) =>
            Host.CreateDefaultBuilder(args)
                .ConfigureWebHostDefaults(webBuilder =>
                {
                    webBuilder.UseStartup<Startup>();
                });
    }
}
