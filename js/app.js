function importHtml(targetId, filePath, cssPath = null) {
    fetch(filePath)
        .then(res => res.text())
        .then(data => {
            document.getElementById(targetId).innerHTML = data;
        });
        if(cssPath) {
                let link = document.createElement("link");
                link.rel = "stylesheet";
                link.href = cssPath;
                document.head.appendChild(link);
        }
}