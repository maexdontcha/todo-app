import React from 'react'

// enzyme
import Adapter from 'enzyme-adapter-react-16'
import { configure, mount, ReactWrapper } from 'enzyme'

// _components
import IconLabelButton, { IProps } from '../iconLabelButton'

configure({ adapter: new Adapter() })

describe('>>> IconLabelButton', () => {
  const mockCallBack = jest.fn()
  const initState: IProps = {
    buttonContent: { color: 'primary', text: 'correctRenderText' },
    onClick: mockCallBack,
    classes: ''
  }

  const falseInitState = {
    buttonContent: { color: 'wrong', text: 'Wrong Text' },
    onClick: 'handleSubmit'
  }
  //   let container: ShallowWrapper
  let wrapper: ReactWrapper

  beforeEach(() => {
    wrapper = mount(
      <IconLabelButton
        onClick={initState.onClick}
        buttonContent={initState.buttonContent}
      />
    )
  })

  it('renders correctly', () => {
    expect(wrapper.length).toEqual(1)
  })

  it('Test click event', async () => {
    await expect(mockCallBack.mock.calls.length).toEqual(0)
    await wrapper.find('button').simulate('click')
    expect(mockCallBack.mock.calls.length).toEqual(1)
  })

  it('prüfe ob nur content korrekt angezeigt wird', () => {
    expect(wrapper.text()).toEqual(initState.buttonContent.text)
    expect(wrapper.text()).not.toEqual('other Text')
  })

  it('prüfe initState', () => {
    expect(wrapper.find(IconLabelButton).prop('buttonContent')).toEqual(
      initState.buttonContent
    )
    expect(wrapper.find(IconLabelButton).prop('buttonContent')).not.toEqual(
      falseInitState.buttonContent
    )

    expect(wrapper.find(IconLabelButton).prop('onClick')).toEqual(
      initState.onClick
    )

    expect(wrapper.find(IconLabelButton).prop('onClick')).not.toEqual(
      falseInitState.onClick
    )
  })
})

// describe('>>> prüfe state IconLabelButton', () => {
//   const handleSubmit = () => {}
//   let wrapper: ReactWrapper
//   const initState: IProps = {
//     buttonContent: { color: 'primary', text: 'Render Text' },
//     onClick: handleSubmit,
//     classes: ''
//   }

//   const falseInitState = {
//     buttonContent: { color: 'wrong', text: handleSubmit },
//     onClick: 'handleSubmit'
//   }

// })

// describe('>>> prüfe state IconLabelButton', () => {
//   const mockCallBack = jest.fn()

//   let wrapper: ReactWrapper

//   const initState: IProps = {
//     buttonContent: { color: 'primary', text: 'Render Text' },
//     onClick: mockCallBack,
//     classes: ''
//   }

//   beforeEach(() => {
//     wrapper = mount(
//       <IconLabelButton
//         onClick={initState.onClick}
//         buttonContent={initState.buttonContent}
//       />
//     )
//   })

// })

//   it('prüfe richtigen Text', () => {
//     expect(
//       wrapper
//         .find('span')
//         .at(0)
//         .equals('Render Text')
//         .toBe(true)
//     )
//   })

//   it('prüfe richtigen Text 22222', () => {
//     expect(
//       wrapper
//         .find('span')
//         .at(0)
//         .html()
//     ).toMatchObject({ name: 'asdasd' })
//   })
