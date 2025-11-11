#!/bin/bash

# Fast Expo App - Clean Script
# This script removes all generated files and dependencies

set -e  # Exit on error

echo "🧹 Fast Expo App - Cleaning project..."
echo ""

# Get the root directory
ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$ROOT_DIR"

# Function to clean a directory
clean_dir() {
    local dir=$1
    local name=$2
    
    if [ -d "$dir" ]; then
        echo "🗑️  Cleaning $name..."
        
        # Remove node_modules
        if [ -d "$dir/node_modules" ]; then
            rm -rf "$dir/node_modules"
            echo "   ✓ Removed node_modules"
        fi
        
        # Remove additional patterns based on directory
        case "$dir" in
            *"/www")
                [ -d "$dir/.next" ] && rm -rf "$dir/.next" && echo "   ✓ Removed .next"
                [ -d "$dir/.turbo" ] && rm -rf "$dir/.turbo" && echo "   ✓ Removed .turbo"
                ;;
            *"/fast-expo-app")
                [ -d "$dir/dist" ] && rm -rf "$dir/dist" && echo "   ✓ Removed dist"
                ;;
            *"/cli/templates/base")
                [ -d "$dir/.expo" ] && rm -rf "$dir/.expo" && echo "   ✓ Removed .expo"
                [ -d "$dir/ios/build" ] && rm -rf "$dir/ios/build" && echo "   ✓ Removed ios/build"
                [ -d "$dir/ios/Pods" ] && rm -rf "$dir/ios/Pods" && echo "   ✓ Removed ios/Pods"
                [ -d "$dir/android/build" ] && rm -rf "$dir/android/build" && echo "   ✓ Removed android/build"
                [ -d "$dir/android/.gradle" ] && rm -rf "$dir/android/.gradle" && echo "   ✓ Removed android/.gradle"
                ;;
        esac
        
        echo ""
    fi
}

# Clean root
echo "🗑️  Cleaning root..."
rm -rf node_modules 2>/dev/null && echo "   ✓ Removed node_modules" || true
rm -rf .turbo 2>/dev/null && echo "   ✓ Removed .turbo" || true
echo ""

# Clean each package
clean_dir "$ROOT_DIR/www" "Website (www)"
clean_dir "$ROOT_DIR/packages/fast-expo-app" "CLI Package"
clean_dir "$ROOT_DIR/cli/templates/base" "Template"

# Clean build artifacts
echo "🗑️  Cleaning build artifacts..."
find . -name "*.tsbuildinfo" -type f -delete 2>/dev/null && echo "   ✓ Removed .tsbuildinfo files" || true
find . -name ".DS_Store" -type f -delete 2>/dev/null && echo "   ✓ Removed .DS_Store files" || true
echo ""

echo "✨ Project cleaned successfully!"
echo ""
echo "📝 To reinstall dependencies, run:"
echo "   ./get_started.sh"
echo ""

