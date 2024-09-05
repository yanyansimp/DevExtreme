import type { dxElementWrapper } from '@js/core/renderer';
import $ from '@js/core/renderer';
import { isDefined } from '@js/core/utils/type';
import type { WidgetOptions } from '@js/ui/widget/ui.widget';
import type { OptionChanged } from '@ts/core/widget/types';
import Widget from '@ts/core/widget/widget';

const CHAT_MESSAGE_AVATAR_CLASS = 'dx-chat-message-avatar';
const CHAT_MESSAGE_AVATAR_INITIALS_CLASS = 'dx-chat-message-avatar-initials';

export interface Properties extends WidgetOptions<Avatar> {
  name?: string;
}

class Avatar extends Widget<Properties> {
  _$initials!: dxElementWrapper;

  _getDefaultOptions(): Properties {
    return {
      ...super._getDefaultOptions(),
      name: '',
    };
  }

  _initMarkup(): void {
    $(this.element()).addClass(CHAT_MESSAGE_AVATAR_CLASS);

    super._initMarkup();

    this._renderInitialsElement();
    this._updateInitials();
  }

  _renderInitialsElement(): void {
    this._$initials = $('<div>')
      .addClass(CHAT_MESSAGE_AVATAR_INITIALS_CLASS)
      .appendTo(this.element());
  }

  _updateInitials(): void {
    const { name } = this.option();

    this._$initials.text(this._getInitials(name));
  }

  _getInitials(name: string | undefined): string {
    if (isDefined(name)) {
      return String(name).charAt(0).toUpperCase();
    }

    return '';
  }

  _optionChanged(args: OptionChanged<Properties>): void {
    const { name } = args;

    switch (name) {
      case 'name':
        this._updateInitials();
        break;
      default:
        super._optionChanged(args);
    }
  }
}

export default Avatar;
