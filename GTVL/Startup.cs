using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(GTVL.Startup))]
namespace GTVL
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
