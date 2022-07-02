import React, { Component } from "react";
import { Input } from "@chakra-ui/react";
class UploadSong extends Component {
  render() {
    return (
      <form
        className=""
        onSubmit={(event) => {
          event.preventDefault();
          const description = this.imageDescription.value;
          this.props.uploadImage(description);
        }}
      >
        {/*
                <input
                  type="file"
                  accept=".jpg, .jpeg, .png, .bmp, .gif"
                  onChange={this.props.captureFile}
                />
                <div className="form-group mr-sm-2">
                  <br></br>
                  <input
                    id="imageDescription"
                    type="text"
                    ref={(input) => {
                      this.imageDescription = input;
                    }}
                    className="form-control"
                    placeholder="Image description..."
                    required
                  />
                </div>
                <button type="submit" class="btn btn-primary btn-block btn-lg">
                  Upload!
                </button>
              </form>
              */}
        <div class="p-6 max-w-sm  rounded-lg border shadow-md flex-1 items-center justify-content">
          <div className="flex items-center justify-content" href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight ">Upload Song</h5>
          </div>
          <p class="mb-3 font-normal ">Accepted Files: mp3, mp4, wav</p>
          <input
            class="form-control
                                    w-full
                                    px-3
                                    py-0.5
                                    text-base
                                     bg-clip-padding
                                    border border-gray-500
                                    rounded
                                    transition
                                    ease-in-out
                                    mb-4
"
            type="file"
            id="formFile"
            accept=".jpg, .jpeg, .png, .bmp, .gif"
            onChange={this.props.captureFile}
          />
          <Input
            className="mb-4"
            placeholder="Song Description"
            id="imageDescription"
            type="text"
            ref={(input) => {
              this.imageDescription = input;
            }}
            required
          />
          <button
            type="submit"
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Submit
          </button>
        </div>
      </form>
    );
  }
}

export default UploadSong;