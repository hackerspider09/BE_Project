from PIL import Image, ImageDraw, ImageFont
import os

from imageWatermark import ImageWaterMark


BASE_DIR = os.getcwd()
image_path = os.path.join(BASE_DIR, "test1.png")




watermark = ImageWaterMark(image_path)

watermarked_image = watermark.image_watermark("hello world", position='top-left')

# Save the watermarked image
watermarked_image.save(os.path.join(BASE_DIR, "watermarked_image.jpg"))




