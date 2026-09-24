# ACE66 Malaysia Chinese Site (myc)

This is the **Malaysia Chinese** promotional site for ACE66.

## Site Configuration

- **Language**: `zh` (Chinese)
- **Country**: `my` (Malaysia)
- **Version**: `v2`
- **Site Name**: ACE66

## Structure

```
myc/
├── index.html          # Main HTML template
├── css/
│   ├── style.css       # Base styles (loader, blockUI, animations)
│   ├── custom.css      # Global custom styles
│   └── custom_1.css    # Template-specific overrides
├── js/
│   ├── custom.js       # Responsive layout engine (viewport calculations)
│   ├── func.js         # Validation & error handling
│   ├── api.js          # reCAPTCHA v2 integration
│   └── [other libraries]
├── images/             # Site assets
├── fonts/              # Custom fonts
└── media/              # Media files
```

## Key Features

### Responsive Design
The site uses JavaScript-driven responsive layouts:
- Mobile breakpoint: `bodywid <= 1000px`
- Assets positioned using dynamic ratio calculations: `ratio = bodyWidth / baseWidth`
- All positioning recalculated on window resize (debounced at 250ms)

### Form Validation
- Username: 6-16 alphanumeric characters
- Mobile: Malaysia-specific regex pattern
- Fullname: Letters only (no numbers or special characters)
- Backend error display via `#div__err-msg-{fieldname}` containers

### Configuration
Site metadata is defined in `index.html` inline script:
```html
<script>
    const lang = 'zh';
    const country = 'my';
    const version = 'v2';
    const site_name = 'ACE66';
</script>
```

## Development Notes

### CSS Load Order (DO NOT CHANGE)
1. `style.css` - Base styles (loader, blockUI)
2. `custom.css` - Global custom styles
3. `custom_1.css` - Template-specific overrides (highest priority)

### JavaScript Load Order (DO NOT CHANGE)
1. jQuery + mobile-detect
2. Bootstrap & FontAwesome
3. SweetAlert2
4. `plugins.js` (jQuery blockUI)
5. `api.js` (reCAPTCHA)
6. `func.js` (validation)
7. CSS files
8. `custom.js` (DOM manipulation, resize handlers)

## Common Tasks

**Update responsive layout**:
- Edit `js/custom.js` lines 1-100 (gem and coin positioning)
- Adjust mobile breakpoint at line 6: `bodywid <= 1000`

**Add validation field**:
1. Define regex in `js/func.js` (lines 13-25)
2. Add global check variable: `check_fieldname = 0`
3. Create error container: `<div id="div__err-msg-fieldname">...</div>`

**Add new animation**:
1. Define `@keyframes` in `css/custom.css`
2. Reference via class or inline in HTML/JS

**Fix styling issue**:
- Add rule to `css/custom_1.css` (higher specificity than custom.css)

## Multi-Site Synchronization

This site is **mirrored** across four locales:
- `myc/` - Malaysia Chinese
- `mye/` - Malaysia English
- `sgc/` - Singapore Chinese
- `sge/` - Singapore English

**Core logic changes** (validation, responsive engine) must be synchronized across all four sites.
**Localization changes** (language, styling) are site-specific.

## References

- See `.github/copilot-instructions.md` for detailed architecture documentation
