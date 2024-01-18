export const pixabayURL = `https://pixabay.com/api/?key=${import.meta.env.VITE_PIXABAY_KEY}`


export function fetchImages(query, options = {}) {
    // Define the base URL
    const BASE_URL = pixabayURL;

    // Validate and set default values for options
    const validImageTypes = ['all', 'photo', 'illustration', 'vector'];
    const validOrientations = ['all', 'horizontal', 'vertical'];
    const validCategories = [
        'backgrounds', 'fashion', 'nature', 'science', 'education', 'feelings',
        'health', 'people', 'religion', 'places', 'animals', 'industry', 'computer',
        'food', 'sports', 'transportation', 'travel', 'buildings', 'business', 'music'
    ];
    const validColors = [
        'grayscale', 'transparent', 'red', 'orange', 'yellow', 'green', 'turquoise',
        'blue', 'lilac', 'pink', 'white', 'gray', 'black', 'brown'
    ];

    options.q = query;
    options.image_type = validImageTypes.includes(options.image_type) ? options.image_type : 'all';
    options.id = options.id || null;
    options.orientation = validOrientations.includes(options.orientation) ? options.orientation : 'all';
    options.category = validCategories.includes(options.category) ? options.category : null;
    options.min_width = options.min_width || null;
    options.min_height = options.min_height || null;
    options.colors = validColors.includes(options.colors) ? options.colors : null;
    options.editors_choice = options.editors_choice || null;
    options.safesearch = options.safesearch || null;
    options.order = options.order || null;
    options.page = options.page || 1;
    options.per_page = options.per_page || 50;

    // Construct the URL with query parameters
    const queryParams = Object.entries(options)
        .filter(([_, value]) => value !== null)  // Exclude null values
        .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
        .join('&');

    const url = `${BASE_URL}&${queryParams}`;

    // Make the fetch request
    return fetch(url, {
        method: 'GET',
    });
}
