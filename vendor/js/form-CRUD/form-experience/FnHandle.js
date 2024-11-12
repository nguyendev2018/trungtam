export function FnCKEditor(idEXP) {

    const {
        ClassicEditor,
        Essentials,
        Heading,
        Bold,
        Italic,
        List,
        Link
    } =
    window.CKEDITOR;
    ClassicEditor.create(
        document.querySelector(`.formEXP[data-id="${idEXP}"] .editor`), {
            plugins: [Essentials, Heading, Bold, Italic, List, Link],
            toolbar: [
                "undo",
                "redo",
                "|",
                "heading",
                "bold",
                "italic",
                "|",
                "bulletedList",
                "numberedList",
            ],
            heading: {
                options: [{
                        model: "paragraph",
                        title: "Paragraph",
                        class: "ck-heading_paragraph",
                    },
                    {
                        model: "heading1",
                        view: "h1",
                        title: "Heading 1",
                        class: "ck-heading_heading1",
                    },
                    {
                        model: "heading2",
                        view: "h2",
                        title: "Heading 2",
                        class: "ck-heading_heading2",
                    },
                    {
                        model: "heading3",
                        view: "h3",
                        title: "Heading 3",
                        class: "ck-heading_heading3",
                    },
                    {
                        model: "heading4",
                        view: "h4",
                        title: "Heading 4",
                        class: "ck-heading_heading4",
                    },
                ],
            },
        }).catch((error) => {
        console.error("Error initializing CKEditor:", error);
    });
  }
  
export function FnDate() {
    $(".datepickerFirst").each(function() {
        $(this).datepicker({
            autoclose: true,
            minViewMode: 1,
            format: "mm/yyyy",
        });
    });
  
    $(".datepickerLast").each(function() {
        $(this).datepicker({
            autoclose: true,
            minViewMode: 1,
            format: "mm/yyyy",
        });
    });
  }
  
export function FnForeign(idEXP) {
    document.querySelector(`.formEXP[data-id="${idEXP}"] .checkForeign`).addEventListener("change", function(e) {
        if (this.checked) {
            document.querySelector(".input-foreign").style.display = "block"
        } else {
            document.querySelector(".input-foreign").style.display = "none"
        }
    })
  }