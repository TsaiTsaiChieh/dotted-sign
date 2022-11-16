import Doc from '../pages/main/doc/Doc'

export const Navigation: NavigationType[] = [
  {
    id: '1',
    name: '上傳簽署檔案',
    path: '/upload_doc',
    childElement: <Doc />,
  },
]
