import createTodo from '../../../../src/menus/todo/todo'
import $ from '../../../../src/utils/dom-core'

test('创建空todo', () => {
    const todo = createTodo().getTodo()
    expect(todo.selector).toEqual(
        `<ul style="margin:0 0 0 20px;position:relative;"><li style="list-style:none;"><span style="position: absolute;left: -18px;top: 2px;" contenteditable="false"><input type="checkbox" style="margin-right:3px;"></span></li></ul>`
    )
})

test('创建带内容todo', () => {
    const p = $(`<p>test</p>`)
    const todo = createTodo(p).getTodo()
    expect(todo.elems[0].outerHTML).toEqual(
        `<ul style="margin:0 0 0 20px;position:relative;"><li style="list-style:none;"><span style="position: absolute;left: -18px;top: 2px;" contenteditable="false"><input type="checkbox" style="margin-right:3px;"></span>test</li></ul>`
    )
})

test('创建带样式的内容的todo', () => {
    const p = $(`<p><b>test</b></p>`)
    const todo = createTodo(p).getTodo()
    expect(todo.elems[0].outerHTML).toEqual(
        `<ul style="margin:0 0 0 20px;position:relative;"><li style="list-style:none;"><span style="position: absolute;left: -18px;top: 2px;" contenteditable="false"><input type="checkbox" style="margin-right:3px;"></span><b>test</b></li></ul>`
    )
})
