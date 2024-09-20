from PIL import Image, ImageDraw, ImageFont
import os

BASE_DIR = os.getcwd()
DIR_PATH = os.path.join(BASE_DIR, "Backend")

class ImageWaterMark:

    def __init__(self, imagePath):
        self.imagePath = imagePath

    def get_dimension(self, imageObj):
        w, h = imageObj.size
        x, y = int(w / 2), int(h / 2)
        font_size = min(x, y)   
        return (w, h, font_size)

    def image_watermark(self, signature, position='bottom-right'):

        img = Image.open(self.imagePath)
        

        w, h, font_size = self.get_dimension(img)
        
        draw = ImageDraw.Draw(img)

        font = ImageFont.truetype(os.path.join(DIR_PATH, "fonts/Roboto-Black.ttf"), font_size/6)


        text_bbox = draw.textbbox((0, 0), signature, font=font)
        text_width = text_bbox[2] - text_bbox[0]
        text_height = text_bbox[3] - text_bbox[1]

        if position == 'top-left':
            x, y = 10, 10
        elif position == 'top-right':
            x, y = w - text_width - 10, 10
        elif position == 'bottom-left':
            x, y = 10, h - text_height - 10
        elif position == 'bottom-right':
            x, y = w - text_width - 10, h - text_height - 10
        elif position == 'center':
            x, y = (w - text_width) / 2, (h - text_height) / 2
        else:
            raise ValueError("Error => Use 'top-left', 'top-right', 'bottom-left', 'bottom-right', or 'center'")

        
        draw.text((x, y), signature, font=font, fill=(255, 255, 255, 128))

        return img  


    

    