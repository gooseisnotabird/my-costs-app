import { mount } from '@vue/test-utils'
import Calc from '@/components/Calc'

describe('Calculator testing', () => {
  test('Test first operator', () => {
    const wrapper = mount(Calc)
    const op1Input = wrapper.find('input[name=op1]')

    // op1Input.element.value = 1
    // op1Input.trigger('input')

    op1Input.setValue(1)

    expect(wrapper.vm.op1).toBe(1) // this.op1
  })

  test('Test secont operator', () => {
    const wrapper = mount(Calc)
    const op2Input = wrapper.find('input[name=op2]')

    op2Input.setValue(2)

    expect(wrapper.vm.op2).toBe(2)
  })

  test('Test sum', () => {
    const wrapper = mount(Calc)
    const op1Input = wrapper.find('input[name=op1]')
    const op2Input = wrapper.find('input[name=op2]')
    const sumButton = wrapper.find('button[name="+"]')

    op1Input.setValue(1)
    op2Input.setValue(2)
    sumButton.trigger('click')

    expect(wrapper.vm.result).toBe(3)
  })

  test('Test div', () => {
    const wrapper = mount(Calc)
    const op1Input = wrapper.find('input[name=op1]')
    const op2Input = wrapper.find('input[name=op2]')
    const sumButton = wrapper.find('button[name="/"]')

    op1Input.setValue(4)
    op2Input.setValue(2)
    sumButton.trigger('click')

    expect(wrapper.vm.result).toBe(2)
  })
})
