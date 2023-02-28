# Jisun Kim Official Website
![jk_official_website](https://user-images.githubusercontent.com/36783010/221737746-4618c532-4966-4110-84bd-19bc05d32c46.jpg)

## Description

This is the official website I designed and built for a client, a Korean model who wanted a website to showcase her modeling work and have a way for others to reach out to her for bookings or inquiries. By using the Sanity Content Management for the website, the client is able to manage her own content on the website.

## Jisun Kim Official Website Live Link

Please check out the live link for the Official Website here: [Jisun Kim Official Website](https://jisunkim.netlify.app/ "Jisun Kim Official Website")

## Table of Contents
* [Technologies Used](#Technologies-Used)
* [Development](#Development)
* [E2E Testing](#E2E-Testing)
* [Screenshots](#Screenshots)

## Technologies Used

* React
* Sanity CMS
* React Router
* React Helmet
* React Bootstrap
* React Grid Gallery
* React Transition Group
* Lightbox2
* Framer Motion
* Material Icons
* CSS (CSS Modules)
* Animate CSS
* Google Fonts
* Font Awesome
* Facebook Developer Tools (Sharing Debugger)
* Netlify

[Back To Top](#Table-of-Contents)

## Development

iSounds Music fetches data from [The AudioDB API](https://www.theaudiodb.com/api_guide.php "The AudioDB API"). Two different endpoints were used: one endpoint to fetch artist details by name, and a second to fetch album details from the artists. Dynamic routing was set up so that when a user goes to an artist's page to view the album information, only that artist's album information will show in its own page with its own route and `id` in the URL. In addition, React Helmet was set up in such a way that the browser tab will display the particular artist's name when the user goes to the artist's album page. For example, if a user searches for Tom Waits, and then goes to Tom Waits's album page, the browser tab will show: "iSounds Music | Albums | Tom Waits".

### Debouncing

To prevent API calls from being fired on every keystroke, a debounce custom hook is used in conjunction with the useEffect hook to delay the API call until the user finishes typing. This ensures that expensive operations, as in the API calls here, are not executed too frequently. The improvement can be seen when looking at the Network tab in the console when making the API calls. In this first example, debouncing is not used. As you can see, API calls are being made with every keystroke. This can be clearly seen in the Network tab. In addition to causing issues with performance, having new information appear with every keystroke can be chaotic and inefficient.

![Screenshot 06](screenshots/withoutDebouncing.gif "Without Debouncing")

In comparison, you can see the improvement in the Network tab when debouncing is used. As you can see, although the same API call is being made (i.e., searching for "david bowie"), the API calls are not executed as frequently as when debouncing is not used. Instead of making API calls with every keystroke, the debounce hook forces the function that is fetching the data to wait a certain amount of time (500ms) before running again. The hook, then, limits the number of times the function is called. As you can see in the Network tab in the example below, this is much more efficient.

![Screenshot 07](screenshots/withDebouncing.gif "With Debouncing")

### Smoothscroll Polyfill

The Albums page (`Artist.js`) containing all of the artist's albums has a "Back to Top" button with smooth scrolling. It has an `onClick` that calls the `scrollToTop` function, which enables the smooth scrolling behavior to the top of the page:

```
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};
```

Still, not all browsers support smooth scrolling (e.g., Safari). To address this, [smoothscroll polyfill](http://iamdustan.com/smoothscroll/ "smooth scroll behavior polyfill") was used so that the smooth scrolling behavior can be used in browsers that do not support smooth scrolling, as in the case with Safari. After installing and importing the polyfill, it was used in `Artist.js`, since this is where the "Back to Top" button is located. The first two lines come from the polyfill documentation and were added inside the `scrollToTop` function, which is called with the `onClick` whenever the "Back to Top" button is clicked:

```
const scrollToTop = () => {
  smoothscroll.polyfill();
  window.scroll({ top: 0, left: 0, behavior: 'smooth' })
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};
```

Before adding these two lines, although the user is able the scroll up in Safari, it would not be a smooth scrolling behavior. However, after adding these lines, the behavior in Safari when clicking the "Back to Top" button is now smooth.

### Placeholder Images
Placeholder images were created using Canva to act as placeholders in cases were there are no images provided in the API, specifically images used in the search results and for album covers:

![Screenshot 08](screenshots/isoundsmusic-screenshot08.png "Placeholder Images Created for Application")

A search result with no image would look like this:

![Screenshot 09](screenshots/isoundsmusic-screenshot09.png "Search Result with No Image")

I didn't like how it looked when no image was available, so I decided to create my own placeholder images, as stated above. To use the created placeholder image when needed, I imported the image into my `ArtistResults` component, then used a ternary operator where I render the image to conditionally render the placeholder images in the case where no image is available in the API, where `PlaceholderImg` is the name given to my imported image:

```
<Card.Img
  src={ artist.strArtistWideThumb ? artist.strArtistWideThumb : PlaceholderImg }
  alt={artist.strArtist}
/>
```
The resulting search result with the placeholder image now looks like this:

![Screenshot 10](screenshots/isoundsmusic-screenshot10.png "Search Result with Placeholder Image")

Similarly, an album with no image looks like this on the page:

![Screenshot 11](screenshots/isoundsmusic-screenshot11.png "Album with No Image")

Again, a ternary operator was used with the imported placeholder image, this time in the `Artist` component:

```
<Card.Img
  src={item.strAlbumThumb ? item.strAlbumThumb : PlaceholderImg}
  alt={item.strArtist}
/>
```

And the resulting album information looks like this:

![Screenshot 12](screenshots/isoundsmusic-screenshot12.png "Album with Placeholder Image")

[Back To Top](#Table-of-Contents)

## Screenshots

![Screenshot 01](screenshots/jk_screenshot_01.jpg "Landing Page")

![Screenshot 02](screenshots/jk_screenshot_02.jpg "About Page")

![Screenshot 01](screenshots/jk_screenshot_03.jpg "Image Gallery: Lightbox")

![Screenshot 02](screenshots/jk_screenshot_04.jpg "404 Page Not Found")

[Back To Top](#Table-of-Contents)
