// 通过ipcMainHandle定义的事件名称
type IpcMainHandleEvent =
  | 'main.CoreLoader:load'
  | 'main.CoreLoader:dispose'
  | 'main.CoreLoader:getCorePath'
  | 'main.CoreLoader:getCoreVersion'
  | 'main.CoreLoader:loadResource'
  | 'main.CoreLoader:create'
  | 'main.CoreLoader:createEx'
  | 'main.CoreLoader:destroy'
  | 'main.CoreLoader:connect'
  | 'main.CoreLoader:createExAndConnect'
  | 'main.CoreLoader:disconnectAndDestroy'
  | 'main.CoreLoader:appendTask'
  | 'main.CoreLoader:setTaskParams'
  | 'main.CoreLoader:start'
  | 'main.CoreLoader:stop'
  | 'main.CoreLoader:supportedStages'
  | 'main.ScheduleRunner:shutdown'
  | 'main.ComponentManager:getStatus'
  | 'main.ComponentManager:install'
  | 'main.DeviceDetector:getAdbPath'
  | 'main.DeviceDetector:getAdbDevices'
  | 'main.DeviceDetector:getEmulators'
  | 'main.DeviceDetector:getDeviceUuid'
  | 'main.DeviceDetector:startEmulator'
  | 'main.Util:getOsArch'
  | 'main.Util:getOsPlatform'
  | 'main.Util:getAppPath'
  | 'main.Util:getUiVersion'
  | 'main.Util:getSystemInformation'
  | 'main.Util:getSystemStatus'
  | 'main.Util:LogSilly'
  | 'main.Util:LogDebug'
  | 'main.Util:LogTrace'
  | 'main.Util:LogInfo'
  | 'main.Util:LogWarn'
  | 'main.Util:LogError'
  | 'main.Util:LogFatal'
  | 'main.Util:CleanLogs'
  | 'main.Util:CleanDownloadCache'
  | 'main.Util:GetCacheInfo'
  | 'main.StorageManager:get'
  | 'main.StorageManager:set'
  | 'main.StorageManager:has'
  | 'main.AppearanceManager:themeUpdated'
  | 'main.WindowManager:closeWindow'
  | 'main.WindowManager:toggleMaximized'
  | 'main.WindowManager:minimize'
  | 'main.WindowManager:isMaximized'
  | 'main.WindowManager:openDialog'
  | 'main.WindowManager:loaded'

// 通过ipcRenderer.on定义的事件名称
type IpcRendererHandleEvent =
  | 'renderer.WindowManager:updateMaximized'
  | 'renderer.WindowManager:loaded'
  | 'renderer.WindowManager:showMessage'
  | 'renderer.CoreLoader:callback'
  | 'renderer.DeviceDetector:searched'
  | 'renderer.DeviceDetector:changeStatus'
  | 'renderer.AppearanceManager:systemThemeUpdated'
  | 'renderer.DownloadModal:updateStatus'
  | 'renderer.ComponentManager:updateStatus'
  | 'renderer.ComponentManager:installInterrupted'
  | 'renderer.ComponentManager:installDone'

interface IpcMainEvent<T> {
  name: IpcMainHandleEvent
  listener: (event: import('electron').IpcMainInvokeEvent, ...args: any[]) => Promise<T> | T | undefined
}

interface IpcRendererEvent<T> {
  name: IpcRendererHandleEvent
  listener: (event: import('electron').IpcRendererEvent, ...args: any[]) => Promise<T> | T | undefined
}
