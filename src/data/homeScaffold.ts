import type { ImageMetadata } from "astro";
import maeAboutSlide from "../assets/images/mae_about_slide.jpeg";
import maeContactSlide from "../assets/images/mae_contact_slide.jpeg";
import maeEventsSlide from "../assets/images/mae_events_slide.jpeg";
import maeJoinSlide from "../assets/images/mae_join_slide.JPEG";
import maeMerchSlide from "../assets/images/mae_merch_slide.jpg";
import maeLogo from "../assets/logo/mta-logo-original.PNG.png";

export type SliceConfig = {
  id: "events" | "contact" | "join" | "merch" | "about";
  label: string;
  href: string;
  path: string;
  imageSrc: ImageMetadata;
  image: {
    x: number;
    y: number;
    width: number;
    height: number;
    preserveAspectRatio?: string;
  };
  text: {
    x: number;
    y: number;
    rotation: number;
    fontSize: number;
    textAnchor?: "start" | "middle" | "end";
    letterSpacing?: string;
  };
};

export const scaffoldViewBox = {
  width: 1512,
  height: 758
};

export const mobileScaffoldViewBox = {
  width: 430,
  height: 606.85
};

export const badgeConfig = {
  cx: 780.5,
  cy: 104.5,
  r: 104,
  image: {
    src: maeLogo,
    x: 676.5,
    y: 0.5,
    width: 208,
    height: 208,
    preserveAspectRatio: "xMidYMid slice"
  }
};

export const mobileBadgeConfig = {
  cx: 115.62,
  cy: 236.37,
  r: 94.16,
  image: {
    src: maeLogo,
    x: 21.46,
    y: 142.21,
    width: 188.32,
    height: 188.32,
    preserveAspectRatio: "xMidYMid slice"
  }
};

/*
 * Primary image-crop adjustment file.
 *
 * To move an image:
 * - decrease `x` to move it left
 * - increase `x` to move it right
 * - decrease `y` to move it up
 * - increase `y` to move it down
 *
 * To zoom:
 * - increase `width` / `height` to zoom out
 * - decrease `width` / `height` to zoom in
 *
 * The SVG slice path stays fixed. Only the image placement changes.
 *
 * Label placement lives in `text`:
 * - `x` / `y` move the text anchor
 * - `rotation` rotates the label to match the slice angle
 * - `fontSize` changes only that label size inside the SVG
 * - `textAnchor` controls whether the anchor is at the left, center, or right
 * The reference mockup is `/src/assets/mockups/mae-mockup-reference.png`.
 */
export const sliceConfigs: SliceConfig[] = [
  {
    id: "join",
    label: "Join",
    href: "/join",
    path: "M983.7,758.5,809.5,221.07a120.24,120.24,0,0,1-56.24.19l-175,537.24Z",
    imageSrc: maeJoinSlide,
    image: {
      x: 580,
      y: 180,
      width: 430 * 1.2,
      height: 590 * 1.2,
      preserveAspectRatio: "xMidYMid slice"
    },
    text: {
      x: 777,
      y: 730,
      rotation: 0,
      fontSize: 165,
      textAnchor: "middle",
      letterSpacing: "-0.05em"
    }
  },
  {
    id: "about",
    label: "About",
    href: "/about",
    path: "M882.6,167.93l586.9,427V104.5h-569c0,.17,0,.33,0,.5A119,119,0,0,1,882.6,167.93Z",
    imageSrc: maeAboutSlide,
    image: {
      x: 845,
      y: 88,
      width: 690,
      height: 460,
      preserveAspectRatio: "xMidYMid slice"
    },
    text: {
      x: 1306,
      y: 465,
      rotation: 36,
      fontSize: 88,
      textAnchor: "middle",
      letterSpacing: "-0.03em"
    }
  },
  {
    id: "merch",
    label: "Merch",
    href: "/merch",
    path: "M872,182.47a119.9,119.9,0,0,1-45.37,33l176,543H1469.5V617.23Z",
    imageSrc: maeMerchSlide,
    image: {
      x: 830,
      y: 185,
      width: 550 * 1.2,
      height: 640 * 1.2,
      preserveAspectRatio: "xMidYMid slice"
    },
    text: {
      x: 965,
      y: 600,
      rotation: 71,
      fontSize: 94,
      textAnchor: "middle",
      letterSpacing: "-0.03em"
    }
  },
  {
    id: "contact",
    label: "Contact",
    href: "/contact",
    path: "M736.12,215.78a119.86,119.86,0,0,1-45.83-33L38.5,655.64V758.5H559.35Z",
    imageSrc: maeContactSlide,
    image: {
      x: 18,
      y: 180,
      width: 785 * 1.05,
      height: 600 * 1.05,
      preserveAspectRatio: "xMidYMid slice"
    },
    text: {
      x: 600,
      y: 600,
      rotation: -71,
      fontSize: 94,
      textAnchor: "middle",
      letterSpacing: "-0.03em"
    }
  },
  {
    id: "events",
    label: "Events",
    href: "/events",
    path: "M679.63,168.29A118.9,118.9,0,0,1,661.5,105c0-.17,0-.33,0-.5H38.5V633.4Z",
    imageSrc: maeEventsSlide,
    image: {
      x: 10,
      y: 82,
      width: 680,
      height: 505,
      preserveAspectRatio: "xMidYMid slice"
    },
    text: {
      x: 250,
      y: 465,
      rotation: -36,
      fontSize: 98,
      textAnchor: "middle",
      letterSpacing: "-0.03em"
    }
  }
];

export const mobileSliceConfigs: SliceConfig[] = [
  {
    id: "events",
    label: "Events",
    href: "/events",
    path: "M0,0H430V125.1H0Z",
    imageSrc: maeEventsSlide,
    image: {
      x: 0,
      y: 0,
      width: 430,
      height: 125.1,
      preserveAspectRatio: "xMidYMid slice"
    },
    text: {
      x: 417,
      y: 114,
      rotation: 0,
      fontSize: 41,
      textAnchor: "end",
      letterSpacing: "-0.03em"
    }
  },
  {
    id: "about",
    label: "About",
    href: "/about",
    path: "M231.14,231.87H430V134.1H155.21A106.84,106.84,0,0,1,231.14,231.87Z",
    imageSrc: maeAboutSlide,
    image: {
      x: 145,
      y: 134.1,
      width: 285,
      height: 97.77,
      preserveAspectRatio: "xMidYMid slice"
    },
    text: {
      x: 417,
      y: 223,
      rotation: 0,
      fontSize: 41,
      textAnchor: "end",
      letterSpacing: "-0.03em"
    }
  },
  {
    id: "merch",
    label: "Merch",
    href: "/merch",
    path: "M430,240.87H231.14a106.85,106.85,0,0,1-75.94,97.78H430Z",
    imageSrc: maeMerchSlide,
    image: {
      x: 145,
      y: 240.87,
      width: 285,
      height: 97.78,
      preserveAspectRatio: "xMidYMid slice"
    },
    text: {
      x: 417,
      y: 332,
      rotation: 0,
      fontSize: 41,
      textAnchor: "end",
      letterSpacing: "-0.03em"
    }
  },
  {
    id: "join",
    label: "Join",
    href: "/join",
    path: "M0,347.65H430v125.1H0Z",
    imageSrc: maeJoinSlide,
    image: {
      x: 0,
      y: 347.65,
      width: 430,
      height: 125.1,
      preserveAspectRatio: "xMidYMid slice"
    },
    text: {
      x: 417,
      y: 464,
      rotation: 0,
      fontSize: 50,
      textAnchor: "end",
      letterSpacing: "-0.03em"
    }
  },
  {
    id: "contact",
    label: "Contact",
    href: "/contact",
    path: "M0,481.75H430v125.1H0Z",
    imageSrc: maeContactSlide,
    image: {
      x: 0,
      y: 481.75,
      width: 430,
      height: 125.1,
      preserveAspectRatio: "xMidYMid slice"
    },
    text: {
      x: 417,
      y: 598,
      rotation: 0,
      fontSize: 50,
      textAnchor: "end",
      letterSpacing: "-0.03em"
    }
  }
];
