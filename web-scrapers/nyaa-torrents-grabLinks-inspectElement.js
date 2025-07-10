let mi = document.querySelectorAll('.fa.fa-fw.fa-magnet');

let links = Array.from(mi)
    .map(element => {
        // Try parent first, then parent's parent
        let parent = element.parentElement;
        if (parent?.href) return parent.href;
        if (parent?.parentElement?.href) return parent.parentElement.href;
        return null;
    })
    .filter(link => link !== null); // Remove nulls


console.log(`Count:${links.length}`)
console.log(links.join('\n'))