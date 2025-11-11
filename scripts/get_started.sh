#!/bin/bash

# Fast Expo App - Get Started Script
# This script installs dependencies in all packages

set -e  # Exit on error

echo "🚀 Fast Expo App - Installing dependencies..."
echo ""

# Check if bun is installed
if ! command -v bun &> /dev/null; then
    echo "❌ Bun is not installed. Please install it first:"
    echo "   curl -fsSL https://bun.sh/install | bash"
    exit 1
fi

echo "✓ Bun found: $(bun --version)"
echo ""

# Function to install dependencies in a directory
install_deps() {
    local dir=$1
    local name=$2
    
    if [ -f "$dir/package.json" ]; then
        echo "📦 Installing dependencies in $name..."
        cd "$dir"
        bun install
        cd - > /dev/null
        echo "✓ $name dependencies installed"
        echo ""
    fi
}

# Get the root directory
ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$ROOT_DIR"

# Install root dependencies
echo "📦 Installing root dependencies..."
bun install
echo "✓ Root dependencies installed"
echo ""

# Install dependencies in each package
install_deps "$ROOT_DIR/www" "Website (www)"
install_deps "$ROOT_DIR/packages/fast-expo-app" "CLI Package"
install_deps "$ROOT_DIR/cli/templates/base" "Template"

echo "🎉 All dependencies installed successfully!"
echo ""
echo "📝 Next steps:"
echo "   • Build the CLI:      bun run build:cli"
echo "   • Run the website:    bun run dev:www"
echo "   • Test the template:  bun run template:start"
echo ""

