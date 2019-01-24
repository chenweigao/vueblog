# OpenCV

---

OpenCV (Open Source Computer Vision Library) is an open source computer vision and machine learning software library. OpenCV was built to provide a common infrastructure for computer vision applications and to accelerate the use of machine perception in the commercial products.
Being a BSD-licensed product, OpenCV makes it easy for businesses to utilize and modify the code.

<details><summary>To use the camera to find the frame face</summary>

```python
video_capture = cv2.VideoCapture(0)
process_this_frame = True
while True:
    # Grab a single frame of video
    ret, frame = video_capture.read()

    # Resize frame of video to 1/4 size for faster face recognition processing
    small_frame = cv2.resize(frame, (0, 0), fx=0.25, fy=0.25)

    # Convert the image from BGR color (which OpenCV uses) to RGB color (which face_recognition uses)
    rgb_small_frame = small_frame[:, :, ::-1]

    # Only process every other frame of video to save time
    if process_this_frame:
        # Find all the faces and face encodings in the current frame of video
        f_face_locations = face_recognition.face_locations(rgb_small_frame)
        f_face_encodings = face_recognition.face_encodings(
            rgb_small_frame, f_face_locations)
        # print(f_face_encodings)
        for f_face_encoding in f_face_encodings:
            match = face_recognition.compare_faces(face_encodings, f_face_encoding, 0.4)
            print(match)
            for (i, name) in enumerate(face_correct_names):
                if match[i]:
                    print(face_correct_names[i])
    process_this_frame = not process_this_frame
    cv2.imshow('Video2', frame)
    # Hit 'q' on the keyboard to quit!
    if cv2.waitKey(1) & 0xFF == ord('q'):
        break

video_capture.release()
cv2.destroyAllWindows()
```

</details>

## Basic

### Load and Display an Image

> Then create a Mat object that will store the data of the loaded image.

#### `imread()`

- First argument is filename

- Second argument specifies the format:
    1. IMREAD_UNCHANGED (<0) loads the image as is (including the alpha channel if present)
    2. IMREAD_GRAYSCALE ( 0) loads the image as an intensity one
    3. IMREAD_COLOR (>0) loads the image in the **RGB format**

#### `namedWindow()`

- *WINDOW_AUTOSIZE*
- *WINDOW_NORMAL*

### Modify and Save an Image

#### `cvtColor()`

 > `cvtColor( image, gray_image, COLOR_BGR2GRAY );`

#### `imwrite()`

> `imwrite( "../../images/Gray_Image.jpg", gray_image );`

Save your transformed image in a file on disk (using `cv::imwrite` )

Write the Mat gray_image to a new file.

## Core Module

### Mat

How OpenCV stores and handles images?

- Mat
- Mat is that you no longer need to manually allocate its memory and release it as soon as you do not need it

`uchar* cv::Mat::ptr(int i)`: Returns a pointer to the specified matrix row.