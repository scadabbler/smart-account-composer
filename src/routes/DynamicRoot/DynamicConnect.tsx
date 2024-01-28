import { DynamicEmbeddedWidget } from '@dynamic-labs/sdk-react-core'
import { Dialog, DialogContent } from '../../components/ui/dialog'
import { FC } from 'react'

interface DynamicConnectProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export const DynamicConnect: FC<DynamicConnectProps> = ({
  open,
  onOpenChange,
}) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="p-0 outline-none min-h-[400px]">
        <DynamicEmbeddedWidget background="none" />
      </DialogContent>
    </Dialog>
  )
}
