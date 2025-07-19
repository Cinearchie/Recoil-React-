import {atom, selector} from 'recoil'


export const networkAtom = atom({
    key: 'networkAtom',
    default: 129
})
export const jobAtom = atom({
    key: 'jobAtom',
    default: 0
})
export const notificationAtom = atom({
    key: 'notificationAtom',
    default: 12
})
export const messageAtom = atom({
    key: 'messageAtom',
    default: 0
})

export const totalNotificationSelector = selector({
    key : "totalNotificationSelector",
    get: ({get}) => {
        const networkCount = get(networkAtom);
        const jobCount = get(jobAtom);
        const notificationCount = get(notificationAtom);
        const messageCount = get(messageAtom)
        return networkCount + jobCount + notificationCount + messageCount
    }
})