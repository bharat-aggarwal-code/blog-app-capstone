const toolbarOptions = [
  ["bold", "italic", "underline", "strike"], // toggled buttons
  ["blockquote", "code-block"],
  ["link", "image", "video", "formula"],

  [{ header: 1 }, { header: 2 }], // custom button values
  [{ list: "ordered" }, { list: "bullet" }, { list: "check" }],
  [{ script: "sub" }, { script: "super" }], // superscript/subscript
  [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
  [{ direction: "rtl" }], // text direction

  [{ size: ["small", false, "large", "huge"] }], // custom dropdown
  [{ header: [1, 2, 3, 4, 5, 6, false] }],

  [{ color: [] }, { background: [] }], // dropdown with defaults from theme
  [{ font: [] }],
  [{ align: [] }],

  ["clean"], // remove formatting button
];
const quill = new Quill("#editor", {
  theme: "snow",
  modules: {
    toolbar: toolbarOptions,
  },
});

// Handle form validation and submission safely
var form = document.getElementById("postForm");

form.addEventListener("submit", function (event) {
  // 1. Get plain text to accurately check if the user actually typed something
  // Quill adds a trailing newline, so we use .trim() to clean it up
  var textContent = quill.getText().trim();

  // 2. Validate length (Rich Text validation)
  if (textContent.length === 0) {
    alert("Content field is required!");
    event.preventDefault(); // Stop the form from submitting
    return false;
  }

  // 3. If validation passes, map the HTML code safely to the hidden field
  var contentInput = document.getElementById("content-input");
  contentInput.value = quill.root.innerHTML;
});
