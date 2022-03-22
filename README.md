# Stan Code Challenge

---

### **About**

The requirements for this challenge are located [here](https://github.com/StreamCo/tv-coding-challenge).

To build this custom Carousel component I opted for a lean approach for and used a minimal React / CSS / Cutom Webpack stack.

![](screen.PNG)

### **Technology breakdown**

##### Custom webpack conjfig

I opted for a custom webpack config as this gives me full control of the project and allowed me to add libraries as I need them as opposed to bringing everything from CRA over. 
It also allows me to specify a build 'dist' and configure this process.

##### React Router Dom

I have used react-router-dom because It is straightforward to get routing working and allows me to pass state without needing to rely on a state management library.

##### 🍦 Vanilla CSS

As the application was basic in terms of styling I have opted for using vanilla CSS following the BEM convention and utilizing basic media queries. Although there is the option of using styled components it seemed overkill as there isn't much need for the JS to interact with the CSS

### **Installation Instructions**

Requirements

- VS Code v1.65.2 or higher
- ESLINT (VS Code Extension) v2.2.2 or higher
- Prettier (VS Code Extension) v9.3.2 or higher
- Node v16.13.1 or higher
- Yarn v1.22.17 or higher

Installation via npm

- Pull the repo
- navigate to the folder containing package.json
- Run **yarn install**
- Run **yarn start**
- Browser should automatically open a browser window on port 8080

### **Known issues**

- on the '/' route 'Home' link on the nav is not active ('/home' is working)
- files in dist folder are named incorrectly
- CSS in dist is included in the JS bundle. Additional configuration is required here to add custom
- There is a slight flicker of the selected box when navigating left and right quickly with the keyboard. A custom debounce hook should fix this
- No test suites. It would have been nice to implement Jest (Next time I'll just use CRA instead of wrestling with a custom webpack to save time)
- Default skeleton colors for loading images flicker as images load.

### **Improvements**

- Uplift the carousel to have a scroll event listener so the carousel can be controlled with the mouse wheel. This would also definitely need that debounce hook
- Add CSS transitions to the carousel
- Add better error handling
- Improve accessibility
- Add gamepad support
