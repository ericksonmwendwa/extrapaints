const imageArray = [];
for (let i = 1; i <= 27; i++) {
  const imageName = `img_${i}.jpeg?alt=media`;
  const imageObject = {
    src: imageName,
    srct: imageName,
    title: `Image ${i}`
  };
  
  imageArray.push(imageObject);
}


jQuery(document).ready(function () {
  jQuery("#nanogallery").nanogallery2({
    locationHash: true,
    items: imageArray,

    // ### gallery settings ### 
    thumbnailHeight: 150,
    thumbnailWidth: 150,
    itemsBaseURL: 'https://firebasestorage.googleapis.com/v0/b/portfolio-83ae9.appspot.com/o/extrapaints%2Fgallery%2F',

    // GALLERY AND THUMBNAIL LAYOUT
    galleryMosaic : [                       // default layout
      { w: 2, h: 2, c: 1, r: 1 },
      { w: 1, h: 1, c: 3, r: 1 },
      { w: 1, h: 1, c: 3, r: 2 },
      { w: 1, h: 2, c: 4, r: 1 },
      { w: 2, h: 1, c: 5, r: 1 },
      { w: 2, h: 2, c: 5, r: 2 },
      { w: 1, h: 1, c: 4, r: 3 },
      { w: 2, h: 1, c: 2, r: 3 },
      { w: 1, h: 2, c: 1, r: 3 },
      { w: 1, h: 1, c: 2, r: 4 },
      { w: 2, h: 1, c: 3, r: 4 },
      { w: 1, h: 1, c: 5, r: 4 },
      { w: 1, h: 1, c: 6, r: 4 }
    ],
    galleryMosaicXS : [                     // layout for XS width
      { w: 2, h: 2, c: 1, r: 1 },
      { w: 1, h: 1, c: 3, r: 1 },
      { w: 1, h: 1, c: 3, r: 2 },
      { w: 1, h: 2, c: 1, r: 3 },
      { w: 2, h: 1, c: 2, r: 3 },
      { w: 1, h: 1, c: 2, r: 4 },
      { w: 1, h: 1, c: 3, r: 4 }
    ],
    galleryMosaicSM : [                     // layout for SM width
      { w: 2, h: 2, c: 1, r: 1 },
      { w: 1, h: 1, c: 3, r: 1 },
      { w: 1, h: 1, c: 3, r: 2 },
      { w: 1, h: 2, c: 1, r: 3 },
      { w: 2, h: 1, c: 2, r: 3 },
      { w: 1, h: 1, c: 2, r: 4 },
      { w: 1, h: 1, c: 3, r: 4 }
    ],
    galleryMaxRows: 1,
    galleryDisplayMode: 'rows',
    gallerySorting: 'random',
    thumbnailDisplayOrder: 'random',

    thumbnailHeight: '180', thumbnailWidth: '220',
    thumbnailAlignment: 'scaled',
    thumbnailGutterWidth: 0, thumbnailGutterHeight: 0,
    thumbnailBorderHorizontal: 0, thumbnailBorderVertical: 0,

    thumbnailToolbarImage: null,
    thumbnailToolbarAlbum: null,
    thumbnailLabel: { display: false },

    // DISPLAY ANIMATION
    // for gallery
    galleryDisplayTransitionDuration: 1500,
    // for thumbnails
    thumbnailDisplayTransition: 'imageSlideUp',
    thumbnailDisplayTransitionDuration: 1200,
    thumbnailDisplayTransitionEasing: 'easeInOutQuint',
    thumbnailDisplayInterval: 60,

    // THUMBNAIL HOVER ANIMATION
    thumbnailBuildInit2: 'image_scale_1.15',
    thumbnailHoverEffect2: 'thumbnail_scale_1.00_1.05_300|image_scale_1.15_1.00',
    touchAnimation: true,
    touchAutoOpenDelay: 500,

    // LIGHTBOX
    viewerToolbar: { display: false },
    viewerTools:    {
      topLeft:   'label',
      topRight:  'shareButton, rotateLeft, rotateRight, fullscreenButton, closeButton'
    },

    // GALLERY THEME
    galleryTheme : { 
      thumbnail: { background: '#111' },
    },
  });
});
