export default interface Application {
    title : string,
    link: string,
    description : string,
    poster?: string,
}

export const applications = [
    { title: "Tile Tap", description: "5 different fun Games about tapping Tiles", link: "https://cafebazaar.ir/app/ir.aligator.tiletap" },
    { title: "Prayer Times", description: "An Islamic calendar that can show you exact prayer times and play adhan", link: "https://cafebazaar.ir/app/ir.aligator.prayer.time", poster: "pt-poster.webp" },
    { title: "Meme Box", description: "A Cross-Platform Meme Making Toolbox that includes meme templates and an image editor", link: "https://cafebazaar.ir/app/ir.aligator.memebox", poster: "mb-poster.webp" },
  ];