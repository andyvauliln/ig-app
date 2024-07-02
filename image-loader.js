// my-loader.js
export default function customLoader({ src, width, quality }) {
    return `https://nuk3f-lqaaa-aaaal-ajfya-cai.icp0.io${src}?w=${width}&q=${quality || 75}`;
}