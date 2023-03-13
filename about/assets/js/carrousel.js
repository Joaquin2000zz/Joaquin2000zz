

function move(action, parent) {
    const childs = Array.from(parent.children).slice(1, -1);
    for (const child of childs) {
        id = child.getAttribute('id');
        let [i, type] = id.split('.');
        i = parseInt(i);
        const i_neg = parseInt(childs.at(-1).getAttribute('id').split('.')[0]);
        if (type === 'Invisible') {
            console.log('entre al if type === Invisible')
            continue
        };
        child.setAttribute('class', 'Invisible'), child.setAttribute('id', `${i}.Invisible`);
        if (action === 'left') {
            var target = i === 0 ? childs.at(-1) : childs[i - 1];
        }
        if (action === 'right') {
            var target = i === i_neg ? childs[0]: childs[i + 1];
        }
        target.setAttribute('class', '');
        const target_id = target.getAttribute('id');
        target.setAttribute('id', `${target_id.split('.')[0]}.Visible`);
        break;
    }
}
