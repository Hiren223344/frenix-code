<p align="center">
  <a href="https://frenixcode.dev">
    <picture>
      <source srcset="packages/console/app/src/asset/logo-ornate-dark.svg" media="(prefers-color-scheme: dark)">
      <source srcset="packages/console/app/src/asset/logo-ornate-light.svg" media="(prefers-color-scheme: light)">
      <img src="packages/console/app/src/asset/logo-ornate-light.svg" alt="FrenixCode logo">
    </picture>
  </a>
</p>
<p align="center">Trợ lý lập trình AI mã nguồn mở.</p>
<p align="center">
  <a href="https://frenixcode.dev/discord"><img alt="Discord" src="https://img.shields.io/discord/1391832426048651334?style=flat-square&label=discord" /></a>
  <a href="https://www.npmjs.com/package/frenixcode"><img alt="npm" src="https://img.shields.io/npm/v/frenixcode?style=flat-square" /></a>
  <a href="https://github.com/Hiren223344/frenix-code/actions/workflows/publish.yml"><img alt="Build status" src="https://img.shields.io/github/actions/workflow/status/Hiren223344/frenix-code/publish.yml?style=flat-square&branch=dev" /></a>
</p>

<p align="center">
  <a href="README.md">English</a> |
  <a href="README.zh.md">简体中文</a> |
  <a href="README.zht.md">繁體中文</a> |
  <a href="README.ko.md">한국어</a> |
  <a href="README.de.md">Deutsch</a> |
  <a href="README.es.md">Español</a> |
  <a href="README.fr.md">Français</a> |
  <a href="README.it.md">Italiano</a> |
  <a href="README.da.md">Dansk</a> |
  <a href="README.ja.md">日本語</a> |
  <a href="README.pl.md">Polski</a> |
  <a href="README.ru.md">Русский</a> |
  <a href="README.bs.md">Bosanski</a> |
  <a href="README.ar.md">العربية</a> |
  <a href="README.no.md">Norsk</a> |
  <a href="README.br.md">Português (Brasil)</a> |
  <a href="README.th.md">ไทย</a> |
  <a href="README.tr.md">Türkçe</a> |
  <a href="README.uk.md">Українська</a> |
  <a href="README.bn.md">বাংলা</a> |
  <a href="README.gr.md">Ελληνικά</a> |
  <a href="README.vi.md">Tiếng Việt</a>
</p>

[![FrenixCode Terminal UI](packages/web/src/assets/lander/screenshot.png)](https://frenixcode.dev)

---

### Cài đặt

```bash
# YOLO
curl -fsSL https://frenixcode.dev/install | bash

# Các trình quản lý gói (Package managers)
npm i -g frenixcode@latest        # hoặc bun/pnpm/yarn
scoop install frenixcode             # Windows
choco install frenixcode             # Windows
brew install frenixcode/tap/frenixcode # macOS và Linux (khuyên dùng, luôn cập nhật)
brew install frenixcode              # macOS và Linux (công thức brew chính thức, ít cập nhật hơn)
sudo pacman -S frenixcode            # Arch Linux (Bản ổn định)
paru -S frenixcode-bin               # Arch Linux (Bản mới nhất từ AUR)
mise use -g frenixcode               # Mọi hệ điều hành
nix run nixpkgs#frenixcode           # hoặc github:Hiren223344/frenix-code cho nhánh dev mới nhất
```

> [!TIP]
> Hãy xóa các phiên bản cũ hơn 0.1.x trước khi cài đặt.

### Ứng dụng Desktop (BETA)

FrenixCode cũng có sẵn dưới dạng ứng dụng desktop. Tải trực tiếp từ [trang releases](https://github.com/Hiren223344/frenix-code/releases) hoặc [frenixcode.dev/download](https://frenixcode.dev/download).

| Nền tảng              | Tải xuống                             |
| --------------------- | ------------------------------------- |
| macOS (Apple Silicon) | `frenixcode-desktop-darwin-aarch64.dmg` |
| macOS (Intel)         | `frenixcode-desktop-darwin-x64.dmg`     |
| Windows               | `frenixcode-desktop-windows-x64.exe`    |
| Linux                 | `.deb`, `.rpm`, hoặc AppImage         |

```bash
# macOS (Homebrew)
brew install --cask frenixcode-desktop
# Windows (Scoop)
scoop bucket add extras; scoop install extras/frenixcode-desktop
```

#### Thư mục cài đặt

Tập lệnh cài đặt tuân theo thứ tự ưu tiên sau cho đường dẫn cài đặt:

1. `$FRENIXCODE_INSTALL_DIR` - Thư mục cài đặt tùy chỉnh
2. `$XDG_BIN_DIR` - Đường dẫn tuân thủ XDG Base Directory Specification
3. `$HOME/bin` - Thư mục nhị phân tiêu chuẩn của người dùng (nếu tồn tại hoặc có thể tạo)
4. `$HOME/.frenixcode/bin` - Mặc định dự phòng

```bash
# Ví dụ
FRENIXCODE_INSTALL_DIR=/usr/local/bin curl -fsSL https://frenixcode.dev/install | bash
XDG_BIN_DIR=$HOME/.local/bin curl -fsSL https://frenixcode.dev/install | bash
```

### Agents (Đại diện)

FrenixCode bao gồm hai agent được tích hợp sẵn mà bạn có thể chuyển đổi bằng phím `Tab`.

- **build** - Agent mặc định, có toàn quyền truy cập cho công việc lập trình
- **plan** - Agent chỉ đọc dùng để phân tích và khám phá mã nguồn
  - Mặc định từ chối việc chỉnh sửa tệp
  - Hỏi quyền trước khi chạy các lệnh bash
  - Lý tưởng để khám phá các codebase lạ hoặc lên kế hoạch thay đổi

Ngoài ra còn có một subagent **general** dùng cho các tìm kiếm phức tạp và tác vụ nhiều bước.
Agent này được sử dụng nội bộ và có thể gọi bằng cách dùng `@general` trong tin nhắn.

Tìm hiểu thêm về [agents](https://frenixcode.dev/docs/agents).

### Tài liệu

Để biết thêm thông tin về cách cấu hình FrenixCode, [**hãy truy cập tài liệu của chúng tôi**](https://frenixcode.dev/docs).

### Đóng góp

Nếu bạn muốn đóng góp cho FrenixCode, vui lòng đọc [tài liệu hướng dẫn đóng góp](./CONTRIBUTING.md) trước khi gửi pull request.

### Xây dựng trên nền tảng FrenixCode

Nếu bạn đang làm việc trên một dự án liên quan đến FrenixCode và sử dụng "frenixcode" như một phần của tên dự án, ví dụ "frenixcode-dashboard" hoặc "frenixcode-mobile", vui lòng thêm một ghi chú vào README của bạn để làm rõ rằng dự án đó không được xây dựng bởi đội ngũ FrenixCode và không liên kết với chúng tôi dưới bất kỳ hình thức nào.

### Các câu hỏi thường gặp (FAQ)

#### FrenixCode khác biệt thế nào so với Claude Code?

Về mặt tính năng, nó rất giống Claude Code. Dưới đây là những điểm khác biệt chính:

- 100% mã nguồn mở
- Không bị ràng buộc với bất kỳ nhà cung cấp nào. Mặc dù chúng tôi khuyên dùng các mô hình được cung cấp qua [FrenixCode Zen](https://frenixcode.dev/zen), FrenixCode có thể được sử dụng với Claude, OpenAI, Google, hoặc thậm chí các mô hình chạy cục bộ. Khi các mô hình phát triển, khoảng cách giữa chúng sẽ thu hẹp lại và giá cả sẽ giảm, vì vậy việc không phụ thuộc vào nhà cung cấp là rất quan trọng.
- Hỗ trợ LSP ngay từ đầu
- Tập trung vào TUI (Giao diện người dùng dòng lệnh). FrenixCode được xây dựng bởi những người dùng neovim và đội ngũ tạo ra [terminal.shop](https://terminal.shop); chúng tôi sẽ đẩy giới hạn của những gì có thể làm được trên terminal lên mức tối đa.
- Kiến trúc client/server. Chẳng hạn, điều này cho phép FrenixCode chạy trên máy tính của bạn trong khi bạn điều khiển nó từ xa qua một ứng dụng di động, nghĩa là frontend TUI chỉ là một trong những client có thể dùng.

---

**Tham gia cộng đồng của chúng tôi** [Discord](https://discord.gg/frenixcode) | [X.com](https://x.com/frenixcode)
