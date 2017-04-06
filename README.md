<p align="center"><img alt="mail-a-tron logo" src="https://raw.githubusercontent.com/GenLife/mail-a-tron/master/static/logo.png" width="128" width="128"></p>
<h2 align="center">Mail-a-tron</h2>
<p align="center">
<strong>✉️ Painless email templates with Next.js ✉️</strong>
<br><br>
<a href="https://npmjs.com/package/mail-a-tron"><img src="https://img.shields.io/npm/dm/mail-a-tron.svg"></a>
<a href="https://npmjs.com/package/mail-a-tron"><img src="https://img.shields.io/npm/v/mail-a-tron.svg"></a>
</p>

<p align="center"><img alt="mail-a-tron demo gif" src="https://raw.githubusercontent.com/GenLife/mail-a-tron/master/static/demo.gif"></p>

**Mail-a-tron** provides you with a better workflow for using email templates in your app.

- 🚀 *Powerful*: Use React to construct your email templates as composable components.
- 🛠️ *Maintainable*: Preview your designs, see how different data affects your layouts.
- 📦 *Modular*: Deploy as a microservice that responds to HTTP requests with html ready to be sent as an email.

## Getting started

Make sure you have docker installed, clone the repo and run:
```bash
docker-compose up
```

Browse to http://localhost:3000/welcome to see the an example template.

## How does it work?

Mail-a-tron is built on top of Zeit's [Next.js](https://github.com/zeit/next.js/) - a minimalistic framework for server-rendered React applications. If you're unfamiliar with Next, take a few minutes to read through their readme. This project leverages a couple of fundamental features:

- URL paths are automatically routed to components in `/pages` with query parameters passed in.
- Automatic server-side rendering - you get a fully formed html response when hitting any route.
- Webpack, hot module reloading, minification, isolated scoped css, and many other things come for free.

In mail-a-tron, we simply build each email template as a separate page. This gives us an easy way to preview them in the browser, whilst also lending itself to be used as a microservice where fully formed email templates are retrieved from an HTTP request.

Designing anything beyond simple text-based emails is challenging due to the inconsistent support for html and css properties.
We use some components from the [react-html-email](https://github.com/chromakode/react-html-email) project to avoid common pitfalls and extend deprecated react attributes, as well as provide some of our own.

## Deployment

The quickest way to get a deployment out in the wild is to use [now](https://github.com/zeit/now-cli).
Make sure you have yarn installed (you can also use npm if you prefer):

```
yarn global add now
now
```

Alternatively, to deploy it manually you can run:

```
yarn
yarn run build
yarn run start
```

## Contribute

This project is still young and will probably have a few bugs to be ironed out. There are also many components and example pages which could be included to help people with common use cases such as background images and invoice emails.

If you find a bug or have any suggestion for improvements feel free to create an issue, or even better a pull request and we'll try to get it included in the project.

Lets give developers a powerful new tool to simplify their workflows when dealing with emails!

## Suggested improvements

### Storybook

Originally this project started out by integrating [react-storybook](https://github.com/storybooks/react-storybook) for previewing emails and quickly inspecting components with different sets of mocked data. We ran into issues getting responsiveness to work well since react-storybook puts the component inside an iframe. There was a [proposed PR](https://github.com/storybooks/react-storybook) to introduce some UI elements into react-storybook that could potentially solve this, but it seems that this approach would be better suited if it was re-implemented as a decorator.

### Templates

This project could do with more templates that can be used as boilerplates. The welcome template is roughly based on a [free email template pack by Litmus](https://litmus.com/resources/free-responsive-email-templates).

### mjml

The mjml project has a more robust set of React components, it would be nice to migrate the current react-html-email library to that one - there's an open issue at the moment regarding this https://github.com/mjmlio/mjml/issues/488

## Resources
- [Useful stackoverflow answer about what you can and can't do with css in emails](http://stackoverflow.com/questions/4466439/css-classes-in-email)
- [Find out if a css property is supported](https://www.campaignmonitor.com/css/)
- [Using CSS in emails](https://css-tricks.com/using-css-in-html-emails-the-real-story/)
- [Awesome email awesomeness](https://github.com/jonathandion/awesome-emails)
- [Creating and sending reusable emails with React](https://medium.com/readme-mic/creating-and-sending-reusable-emails-with-react-a80ade7614b)
- [Coding mobile first emails](https://cm.engineering/coding-mobile-first-emails-1513ac4673e)
- [Send test emails](https://putsmail.com/)

## Authors

- João Mesquita ([@fusillini](https://twitter.com/fusillini)) - [GenLife](https://gen.life)
- James Poole [@jamescpoole](https://twitter.com/jamescpoole) - [GenLife](https://gen.life)
- Sha 256 - [GenLife](https://gen.life)

## License

[MIT](LICENSE.md)
