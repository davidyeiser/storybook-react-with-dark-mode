# Storybook React with Dark Mode Integration

This is a companion repository for a tutorial on [how to set up Storybook React with dark mode integration](https://davidyeiser.com/tutorials/storybook-react-with-dark-mode). It uses the [storybook-dark-mode](https://github.com/hipstersmoothie/storybook-dark-mode) addon to toggle dark mode on and off for Storybook and connects the React components to the control with the addon’s `useDarkMode` React hook.

![Animated image showing the Storybook user interface and the React component in the main preview window toggling dark mode on and off.](https://davidyeiser.com/images/tutorials/storybook-animated-final-story-card.gif)

## Install

From the project’s root directory, run:

```
yarn
```

This installs React, Storybook, the `storybook-dark-mode` addon, [Emotion](https://emotion.sh/docs/introduction) and the rest of the project dependencies.

## Run

```
yarn storybook
```

This will load Storybook at `http://localhost:9001`.
