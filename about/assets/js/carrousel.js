document.addEventListener('DOMContentLoaded', () => {
    for (const div of document.querySelectorAll('div.portfolio_div')) {
        let first = true, i = 0;
        for (const child of div.children) {
            if (child.tagName !== 'DIV') continue;
            child.setAttribute('id', `${i}.Invisible`), i++;
            if (first)
                first = false, child.setAttribute('class', ''), child.setAttribute('id', `${i - 1}.Visible`);
        }
    }
})

function move(action, parent) {
    console.log('parent')
    console.log(parent)
    const childs = Array.from(parent.children).slice(1, -1);
    console.log(childs)
    for (const child of childs) {
        id = child.getAttribute('id');
        let [i, type] = id.split('.');
        i = parseInt(i);
        const i_neg = parseInt(childs.at(-1).getAttribute('id').split('.')[0]);
        console.log('type')
        console.log(type)
        console.log(child)
        if (type === 'Invisible') {
            console.log('entre al if type === Invisible')
            continue
        };
        child.setAttribute('class', 'Invisible'), child.setAttribute('id', `${i}.Invisible`);
        if (action === 'left') {
            console.log('en if left')
            console.log(i)
            console.log(childs.at(-1))
            console.log(childs[i - 1])
            var target = i === 0 ? childs.at(-1) : childs[i - 1];
        }
        if (action === 'right') {
            var target = i === i_neg ? childs[0]: childs[i + 1];
        }
        console.log('target')
        console.log(target)
        target.setAttribute('class', '');
        const target_id = target.getAttribute('id');
        target.setAttribute('id', `${target_id.split('.')[0]}.Visible`);
        console.log('desp')
        console.log(child)
        console.log('target')
        console.log(target)
        break;
    }
}
