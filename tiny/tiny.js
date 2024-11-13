
// Prevent Bootstrap dialog from blocking focusin
document.addEventListener('focusin', (e) => {
  if (e.target.closest(".tox-tinymce, .tox-tinymce-aux, .moxman-window, .tam-assetmanager-root") !== null) {
    e.stopImmediatePropagation();
  }
});

const MediumTitleConfig = {
    selector: "h1",
    menubar: false,
    toolbar: false,
    plugins: 'advlist autolink lists link image charmap preview anchor pagebreak',
    license_key: 'gpl',
}
const MediumStoryConfig = {
    selector: "#editor",
    menubar: false,
    toolbar: false,
    plugins: 'advlist autolink lists link image charmap preview anchor pagebreak',
    license_key: 'gpl',
    quickbars_selection_toolbar: "bold italic link | h1 h2 | blockquote",
}
tinymce.init(MediumTitleConfig);
tinymce.init(MediumStoryConfig);