import Doc from '../pages/main/doc/Doc'
import Download from '../pages/main/download/Download'
import Sign from '../pages/main/sign/Sign'

export const Navigation: NavigationType[] = [
  {
    id: '1',
    name: '上傳簽署檔案',
    path: '/upload_doc',
    childElement: <Doc />,
  },
  {
    id: '2',
    name: '進行簽署',
    path: '/upload_sign',
    childElement: <Sign />,
  },
  {
    id: '3',
    name: '完成簽署',
    path: '/download',
    childElement: <Download />,
  },
]
