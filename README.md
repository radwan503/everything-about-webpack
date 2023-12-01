# Webpack
Webpack is open source module bundler where it takes codes, module, javascript, css , image, file then bundle them together .

When use  webpack
For small project used webpack can be seen as overkill in some case. However its depend on specific needs and goals. 

How to use webpack
To use webpack first need to install npm init-y,  webpack,  webpack cli, and save them in dev. then  create a webpack.config.js file. inside webpack config file where some property or object are always need like path, entry-define where to start to bundle, module- inside module here set different rules for different file or assets, plugin, output-in output object define where bundle filename ,path.

Assets Module
Define assets type like image,txt.there are four type assets module
- Asset/Resource-generate in dist
- Asset/inline-generate in bundle js.that why bundle size makes large
- Asset/general- for url/cdn
- Asset/source- for txt file

Loaders
Webpack uses different types of loader to load file  
 - CSS:  css-loader, style-loader are uses to load css
 - SCSS: sass-loader,css-loader,style-loader to load scss
 - JS: @babel/core babel-loader @babel/preset-env to load js in different browser and version.

Plugin
plugin are additional js libraries that do everything that loader cannot do.
- Terserplugin : minified webpack bundle
- MiniCssExtractPlugin : Extract css into seperate bundle
- BrowserCaching: something changes not affects in browser cause fo browser caching.to solve this use .[contenthash].js in js and css.
- CleanWebpackPlugin: Clean dist folder before every new build.we can also use clean:true in output object to clean dist before bundle
- HtmlWebpackPlugin: generate html file in dist automatically. this file need ton build automatically beacuse our css and  bundle js path changed every build but we cannet changed the html path always manually that why we use this HtmlWebpackPlugin to generate html automaticallly where css and js path set  with current build path. 

Production and Development Builds
Make two separate webpack config file for production and development. In production dont need to add some file like terserplugin.
same as dev file remove cssextract and terserfile.add webpack dev server to fast devopment.
