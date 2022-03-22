# Stan Code Challenge

---

### **About**

The requirements for this challenge are located [here](https://github.com/StreamCo/tv-coding-challenge).

To build this custom Carousel component I opted for a lean approach and used a minimal React / CSS / Custom Webpack stack.

![](screen1.png)

### **Technology breakdown**

##### Custom webpack config

I opted for a custom webpack config as this gave me full control of the project and allowed me to add libraries as I needed them as opposed to bringing everything over from CRA. 
It also allowed me to specify a build 'dist' and configure that process.

##### React Router Dom

I used react-router-dom because It is straightforward to get routing working and allowed me to pass state without needing to rely on a state management library.

##### 🍦 Vanilla CSS

As the application was basic in terms of styling I opted to use vanilla CSS following the BEM convention and utilise basic media queries. Although there was the option of using styled components it seemed like overkill as there wasn't much need for the JS to interact with CSS.

### **Installation Instructions**

Requirements

- VS Code v1.65.2 or higher
- ESLINT (VS Code Extension) v2.2.2 or higher
- Prettier (VS Code Extension) v9.3.2 or higher
- Node v16.13.1 or higher
- Yarn v1.22.17 or higher

Installation via yarn

- Pull the repo
- navigate to the folder containing package.json
- Run **yarn install**
- Run **yarn start**
- Browser should automatically open a browser window on port 8080

### **Known issues**

- on the '/' route 'Home' link on the nav is not active ('/home' is working)
- files in dist folder are named incorrectly
- CSS in dist is included in the JS bundle. Additional configuration is required here for customisation
- There is a slight flicker of the selected box when navigating left and right quickly with the keyboard. A custom debounce hook should fix this
- No test suites. It would have been nice to implement Jest (Next time I would just use CRA instead of wrestling with a custom webpack to save time)
- Default skeleton colors for loading images flicker as images load.

### **Improvements**

- Uplift the carousel to have a scroll event listener so the carousel can be controlled with the mouse wheel. This would also definitely require that debounce hook
- Add CSS transitions to the carousel
- Add better error handling
- Improve accessibility
- Add gamepad support
