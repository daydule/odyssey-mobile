// TODO: 別の方法でStorybookを見れる方法が見つかったら、このファイルは削除する
// TODO: 全文検索用ID(SCWCw5gMca)
import Constants from 'expo-constants';
import { default as storybook } from '../../.storybook';
export default Constants?.expoConfig?.extra?.storybookEnabled === 'true' ? storybook : undefined;
