
import os
import cv2


def video_to_frames(video_path, output_dir):
    # Check if output dir present or not
    if not os.path.exists(output_dir):
        os.makedirs(output_dir)

    # Capture video
    capture = cv2.VideoCapture(video_path)

    video_characteristics(capture)

    frame_count = 0
    while True:
        # Reading frame one by one from captured video object
        success, frame = capture.read()

        # if there is no any frame exit
        if not success:
            break  

        
        frame_filename = os.path.join(output_dir, f"frame{frame_count}.jpg")

        cv2.imwrite(frame_filename, frame)

        frame_count += 1

    # Release captured video
    capture.release()  


def video_characteristics(captureObj):
    frame_count = int(captureObj.get(cv2.CAP_PROP_FRAME_COUNT))
    frame_width = int(captureObj.get(cv2.CAP_PROP_FRAME_WIDTH))
    frame_height = int(captureObj.get(cv2.CAP_PROP_FRAME_HEIGHT))
    fps = captureObj.get(cv2.CAP_PROP_FPS)


    print(f"Number of frames: {frame_count}")
    print(f"Resolution: {frame_width}x{frame_height}")
    print(f"Frame rate: {fps} fps")


if __name__ == "__main__":
    BASE_DIR = os.getcwd()

    video_path = os.path.join(BASE_DIR, "video.mp4")  
    output_dir = os.path.join(BASE_DIR, "frames")  

    '''
    import os
    file_size = os.path.getsize("video.mp4")
    '''

    video_to_frames(video_path, output_dir)
